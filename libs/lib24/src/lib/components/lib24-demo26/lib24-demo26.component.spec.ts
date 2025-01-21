import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo26Component } from './lib24-demo26.component';

describe('Lib24Demo26Component', () => {
  let component: Lib24Demo26Component;
  let fixture: ComponentFixture<Lib24Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
