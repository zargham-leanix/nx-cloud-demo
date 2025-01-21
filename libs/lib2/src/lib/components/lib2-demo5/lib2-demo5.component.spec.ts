import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo5Component } from './lib2-demo5.component';

describe('Lib2Demo5Component', () => {
  let component: Lib2Demo5Component;
  let fixture: ComponentFixture<Lib2Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
