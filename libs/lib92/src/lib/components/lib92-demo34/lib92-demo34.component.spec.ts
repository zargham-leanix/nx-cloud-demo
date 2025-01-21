import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo34Component } from './lib92-demo34.component';

describe('Lib92Demo34Component', () => {
  let component: Lib92Demo34Component;
  let fixture: ComponentFixture<Lib92Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
