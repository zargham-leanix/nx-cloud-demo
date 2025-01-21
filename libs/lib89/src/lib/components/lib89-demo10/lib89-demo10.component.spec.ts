import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo10Component } from './lib89-demo10.component';

describe('Lib89Demo10Component', () => {
  let component: Lib89Demo10Component;
  let fixture: ComponentFixture<Lib89Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
