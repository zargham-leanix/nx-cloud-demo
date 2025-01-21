import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo35Component } from './lib89-demo35.component';

describe('Lib89Demo35Component', () => {
  let component: Lib89Demo35Component;
  let fixture: ComponentFixture<Lib89Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
