import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo14Component } from './lib43-demo14.component';

describe('Lib43Demo14Component', () => {
  let component: Lib43Demo14Component;
  let fixture: ComponentFixture<Lib43Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
