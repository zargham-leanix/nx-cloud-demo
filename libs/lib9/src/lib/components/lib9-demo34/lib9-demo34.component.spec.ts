import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo34Component } from './lib9-demo34.component';

describe('Lib9Demo34Component', () => {
  let component: Lib9Demo34Component;
  let fixture: ComponentFixture<Lib9Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
