import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo26Component } from './lib44-demo26.component';

describe('Lib44Demo26Component', () => {
  let component: Lib44Demo26Component;
  let fixture: ComponentFixture<Lib44Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
