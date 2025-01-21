import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo5Component } from './lib3-demo5.component';

describe('Lib3Demo5Component', () => {
  let component: Lib3Demo5Component;
  let fixture: ComponentFixture<Lib3Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
