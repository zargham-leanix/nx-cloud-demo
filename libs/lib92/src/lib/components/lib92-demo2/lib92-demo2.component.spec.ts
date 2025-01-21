import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo2Component } from './lib92-demo2.component';

describe('Lib92Demo2Component', () => {
  let component: Lib92Demo2Component;
  let fixture: ComponentFixture<Lib92Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
