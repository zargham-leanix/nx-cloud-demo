import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo26Component } from './lib74-demo26.component';

describe('Lib74Demo26Component', () => {
  let component: Lib74Demo26Component;
  let fixture: ComponentFixture<Lib74Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
