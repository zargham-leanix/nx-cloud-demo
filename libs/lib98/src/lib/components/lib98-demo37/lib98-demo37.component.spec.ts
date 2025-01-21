import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo37Component } from './lib98-demo37.component';

describe('Lib98Demo37Component', () => {
  let component: Lib98Demo37Component;
  let fixture: ComponentFixture<Lib98Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
