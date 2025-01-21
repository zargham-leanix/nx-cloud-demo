import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo5Component } from './lib43-demo5.component';

describe('Lib43Demo5Component', () => {
  let component: Lib43Demo5Component;
  let fixture: ComponentFixture<Lib43Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
