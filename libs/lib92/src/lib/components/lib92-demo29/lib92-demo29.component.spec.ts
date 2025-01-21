import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo29Component } from './lib92-demo29.component';

describe('Lib92Demo29Component', () => {
  let component: Lib92Demo29Component;
  let fixture: ComponentFixture<Lib92Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
