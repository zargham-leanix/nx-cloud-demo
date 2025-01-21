import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo26Component } from './lib59-demo26.component';

describe('Lib59Demo26Component', () => {
  let component: Lib59Demo26Component;
  let fixture: ComponentFixture<Lib59Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
