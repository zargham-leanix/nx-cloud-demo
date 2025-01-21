import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo22Component } from './lib43-demo22.component';

describe('Lib43Demo22Component', () => {
  let component: Lib43Demo22Component;
  let fixture: ComponentFixture<Lib43Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
