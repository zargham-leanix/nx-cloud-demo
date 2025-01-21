import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo11Component } from './lib43-demo11.component';

describe('Lib43Demo11Component', () => {
  let component: Lib43Demo11Component;
  let fixture: ComponentFixture<Lib43Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
