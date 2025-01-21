import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo5Component } from './lib94-demo5.component';

describe('Lib94Demo5Component', () => {
  let component: Lib94Demo5Component;
  let fixture: ComponentFixture<Lib94Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
