import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo25Component } from './lib14-demo25.component';

describe('Lib14Demo25Component', () => {
  let component: Lib14Demo25Component;
  let fixture: ComponentFixture<Lib14Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
