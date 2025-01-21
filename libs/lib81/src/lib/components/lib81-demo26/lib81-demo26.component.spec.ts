import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo26Component } from './lib81-demo26.component';

describe('Lib81Demo26Component', () => {
  let component: Lib81Demo26Component;
  let fixture: ComponentFixture<Lib81Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
