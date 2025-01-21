import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo5Component } from './lib19-demo5.component';

describe('Lib19Demo5Component', () => {
  let component: Lib19Demo5Component;
  let fixture: ComponentFixture<Lib19Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
