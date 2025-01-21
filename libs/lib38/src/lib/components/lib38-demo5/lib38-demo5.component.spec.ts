import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo5Component } from './lib38-demo5.component';

describe('Lib38Demo5Component', () => {
  let component: Lib38Demo5Component;
  let fixture: ComponentFixture<Lib38Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
