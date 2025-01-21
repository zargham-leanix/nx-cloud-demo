import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo5Component } from './lib42-demo5.component';

describe('Lib42Demo5Component', () => {
  let component: Lib42Demo5Component;
  let fixture: ComponentFixture<Lib42Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
