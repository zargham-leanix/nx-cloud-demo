import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo31Component } from './lib89-demo31.component';

describe('Lib89Demo31Component', () => {
  let component: Lib89Demo31Component;
  let fixture: ComponentFixture<Lib89Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
