import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo25Component } from './lib92-demo25.component';

describe('Lib92Demo25Component', () => {
  let component: Lib92Demo25Component;
  let fixture: ComponentFixture<Lib92Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
