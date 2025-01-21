import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo25Component } from './lib34-demo25.component';

describe('Lib34Demo25Component', () => {
  let component: Lib34Demo25Component;
  let fixture: ComponentFixture<Lib34Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
