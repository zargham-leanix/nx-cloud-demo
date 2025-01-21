import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo34Component } from './lib43-demo34.component';

describe('Lib43Demo34Component', () => {
  let component: Lib43Demo34Component;
  let fixture: ComponentFixture<Lib43Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
