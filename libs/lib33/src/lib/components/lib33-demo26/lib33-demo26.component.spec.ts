import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo26Component } from './lib33-demo26.component';

describe('Lib33Demo26Component', () => {
  let component: Lib33Demo26Component;
  let fixture: ComponentFixture<Lib33Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
