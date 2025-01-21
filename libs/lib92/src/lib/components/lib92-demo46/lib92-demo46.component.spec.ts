import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo46Component } from './lib92-demo46.component';

describe('Lib92Demo46Component', () => {
  let component: Lib92Demo46Component;
  let fixture: ComponentFixture<Lib92Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
