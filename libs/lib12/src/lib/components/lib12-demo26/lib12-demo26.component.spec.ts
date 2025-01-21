import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo26Component } from './lib12-demo26.component';

describe('Lib12Demo26Component', () => {
  let component: Lib12Demo26Component;
  let fixture: ComponentFixture<Lib12Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
