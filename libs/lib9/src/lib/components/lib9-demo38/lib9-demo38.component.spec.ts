import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo38Component } from './lib9-demo38.component';

describe('Lib9Demo38Component', () => {
  let component: Lib9Demo38Component;
  let fixture: ComponentFixture<Lib9Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
