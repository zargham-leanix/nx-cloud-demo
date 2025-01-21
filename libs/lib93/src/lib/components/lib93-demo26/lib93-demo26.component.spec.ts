import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo26Component } from './lib93-demo26.component';

describe('Lib93Demo26Component', () => {
  let component: Lib93Demo26Component;
  let fixture: ComponentFixture<Lib93Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
