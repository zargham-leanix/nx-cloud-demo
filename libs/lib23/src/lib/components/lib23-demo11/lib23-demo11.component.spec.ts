import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo11Component } from './lib23-demo11.component';

describe('Lib23Demo11Component', () => {
  let component: Lib23Demo11Component;
  let fixture: ComponentFixture<Lib23Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
