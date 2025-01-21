import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo43Component } from './lib9-demo43.component';

describe('Lib9Demo43Component', () => {
  let component: Lib9Demo43Component;
  let fixture: ComponentFixture<Lib9Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
