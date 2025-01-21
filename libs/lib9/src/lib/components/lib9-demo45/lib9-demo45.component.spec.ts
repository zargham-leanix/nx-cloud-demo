import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo45Component } from './lib9-demo45.component';

describe('Lib9Demo45Component', () => {
  let component: Lib9Demo45Component;
  let fixture: ComponentFixture<Lib9Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
