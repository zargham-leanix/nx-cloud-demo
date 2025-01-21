import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo11Component } from './lib92-demo11.component';

describe('Lib92Demo11Component', () => {
  let component: Lib92Demo11Component;
  let fixture: ComponentFixture<Lib92Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
