import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo5Component } from './lib13-demo5.component';

describe('Lib13Demo5Component', () => {
  let component: Lib13Demo5Component;
  let fixture: ComponentFixture<Lib13Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
