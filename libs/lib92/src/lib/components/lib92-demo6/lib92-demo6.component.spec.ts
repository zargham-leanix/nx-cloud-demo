import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo6Component } from './lib92-demo6.component';

describe('Lib92Demo6Component', () => {
  let component: Lib92Demo6Component;
  let fixture: ComponentFixture<Lib92Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
