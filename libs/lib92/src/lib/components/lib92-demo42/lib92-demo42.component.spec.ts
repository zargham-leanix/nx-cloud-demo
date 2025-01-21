import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo42Component } from './lib92-demo42.component';

describe('Lib92Demo42Component', () => {
  let component: Lib92Demo42Component;
  let fixture: ComponentFixture<Lib92Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
