import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo17Component } from './lib92-demo17.component';

describe('Lib92Demo17Component', () => {
  let component: Lib92Demo17Component;
  let fixture: ComponentFixture<Lib92Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
