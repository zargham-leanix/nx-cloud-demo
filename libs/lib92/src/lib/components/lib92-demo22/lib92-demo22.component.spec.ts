import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo22Component } from './lib92-demo22.component';

describe('Lib92Demo22Component', () => {
  let component: Lib92Demo22Component;
  let fixture: ComponentFixture<Lib92Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
