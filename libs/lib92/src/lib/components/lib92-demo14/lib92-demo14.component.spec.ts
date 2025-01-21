import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo14Component } from './lib92-demo14.component';

describe('Lib92Demo14Component', () => {
  let component: Lib92Demo14Component;
  let fixture: ComponentFixture<Lib92Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
