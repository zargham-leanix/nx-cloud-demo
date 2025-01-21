import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo11Component } from './lib13-demo11.component';

describe('Lib13Demo11Component', () => {
  let component: Lib13Demo11Component;
  let fixture: ComponentFixture<Lib13Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
