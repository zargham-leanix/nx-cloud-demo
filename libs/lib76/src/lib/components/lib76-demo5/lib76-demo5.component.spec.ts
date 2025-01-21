import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo5Component } from './lib76-demo5.component';

describe('Lib76Demo5Component', () => {
  let component: Lib76Demo5Component;
  let fixture: ComponentFixture<Lib76Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
