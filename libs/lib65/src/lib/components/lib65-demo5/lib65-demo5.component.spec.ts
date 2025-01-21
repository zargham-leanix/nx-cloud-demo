import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo5Component } from './lib65-demo5.component';

describe('Lib65Demo5Component', () => {
  let component: Lib65Demo5Component;
  let fixture: ComponentFixture<Lib65Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
