import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo43Component } from './lib92-demo43.component';

describe('Lib92Demo43Component', () => {
  let component: Lib92Demo43Component;
  let fixture: ComponentFixture<Lib92Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
