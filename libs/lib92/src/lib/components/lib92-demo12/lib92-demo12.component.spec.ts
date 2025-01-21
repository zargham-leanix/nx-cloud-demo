import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo12Component } from './lib92-demo12.component';

describe('Lib92Demo12Component', () => {
  let component: Lib92Demo12Component;
  let fixture: ComponentFixture<Lib92Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
