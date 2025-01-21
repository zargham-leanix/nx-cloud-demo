import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo5Component } from './lib86-demo5.component';

describe('Lib86Demo5Component', () => {
  let component: Lib86Demo5Component;
  let fixture: ComponentFixture<Lib86Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
