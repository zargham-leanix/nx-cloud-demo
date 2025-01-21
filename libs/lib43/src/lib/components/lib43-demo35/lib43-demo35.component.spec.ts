import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo35Component } from './lib43-demo35.component';

describe('Lib43Demo35Component', () => {
  let component: Lib43Demo35Component;
  let fixture: ComponentFixture<Lib43Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
