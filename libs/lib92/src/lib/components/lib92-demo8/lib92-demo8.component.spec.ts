import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo8Component } from './lib92-demo8.component';

describe('Lib92Demo8Component', () => {
  let component: Lib92Demo8Component;
  let fixture: ComponentFixture<Lib92Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
