import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo31Component } from './lib43-demo31.component';

describe('Lib43Demo31Component', () => {
  let component: Lib43Demo31Component;
  let fixture: ComponentFixture<Lib43Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
