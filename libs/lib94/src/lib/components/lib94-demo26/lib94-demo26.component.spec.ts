import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo26Component } from './lib94-demo26.component';

describe('Lib94Demo26Component', () => {
  let component: Lib94Demo26Component;
  let fixture: ComponentFixture<Lib94Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
