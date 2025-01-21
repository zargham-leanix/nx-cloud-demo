import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo29Component } from './lib43-demo29.component';

describe('Lib43Demo29Component', () => {
  let component: Lib43Demo29Component;
  let fixture: ComponentFixture<Lib43Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
