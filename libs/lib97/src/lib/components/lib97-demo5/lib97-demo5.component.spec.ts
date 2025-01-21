import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo5Component } from './lib97-demo5.component';

describe('Lib97Demo5Component', () => {
  let component: Lib97Demo5Component;
  let fixture: ComponentFixture<Lib97Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
